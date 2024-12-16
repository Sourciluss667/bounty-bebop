import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://mainnet-game-prod-graphql.nursery.reitnorf.com/console': {
      headers: {
        'x-hasura-admin-secret': 'ad047990df75316c2b081fe8a19911cd8b8d9997fb3e13b5d511d61241a9622b'
      }
    }
  },
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
