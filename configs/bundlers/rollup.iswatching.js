

const isWatching = process.env.ROLLUP_WATCH ||
                  process.argv.includes('-w') ||
                  process.argv.includes('--watch');
