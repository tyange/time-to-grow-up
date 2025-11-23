module.exports = {
  apps: [{
    name: 'time-to-grow-up',
    script: 'pnpm start',
    cwd: '/home/ubuntu/dev/deploy/time-to-grow-up',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
    },
    time: true,
    merge_logs: true,
    max_memory_restart: '500M',
    watch: false,
    ignore_watch: [
      'node_modules',
      'logs',
      '.git',
    ],
    restart_delay: 0,
    max_restarts: 10,
    min_uptime: '5s',
    autorestart: true,
  }],
}
