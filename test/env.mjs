import { register } from 'ts-node'

register({
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs',
    jsx: 'react',
  },
})
