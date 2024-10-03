FROM node:20-alpine

# Install dependencies for Alpine
RUN corepack enable
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN echo 'nodeLinker: "node-modules"' > ./.yarnrc.yml
RUN \
    if [ -f yarn.lock ]; then yarn install; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Copy necessary configuration files
COPY tailwind.config.js postcss.config.js ./

# Copy source code and other necessary files
COPY ./src ./src
COPY ./public ./public
COPY ./next.config.js ./tsconfig.json ./

# Set environment variable for the build process
ENV NODE_ENV=production

# Build the application
RUN \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi

# Set up the application to run
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set appropriate permissions
USER nextjs

# Expose the necessary port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["yarn", "start"]