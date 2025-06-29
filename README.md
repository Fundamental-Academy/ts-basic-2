## What you need understand before learn TypeScript

1. JavaScript Basics
2. Node.js Environment
3. Package Manager (npm/pnpm)

## How to create a new project with TypeScript:

1. Install typescript dependencies:

```
npm install typescript
```

2. Initiate a TypeScript project:

```
npx tsc --init
```

3. Create a new `.ts` file in the `src/` folder. You can add and edit `.ts` file in `src/` folder.

```
mkdir src
touch src/index.ts
```

4. Update the `package.json` file with a new script:

```
{
  "scripts": {
    "dev": "tsc && node ./build/index.js"
  },
  "devDependencies": {
    "typescript": "^5.8.2"
  }
}
```

5. Configure the `tsconfig.json` file, add `"outDir": "./build"` to specify where the compiled JavaScript files should be placed. Also, set `"rootDir": "./src"` to indicate the root directory of your source files.

```
{
  "compilerOptions": {
    ...
    "outDir": "./build",
    ...
    "rootDir": "./src"
    ...
  }
}
```

6. Happy Coding. If you want build and run the project, run the build script to compile TypeScript code into JavaScript:

```
npm run dev
```
