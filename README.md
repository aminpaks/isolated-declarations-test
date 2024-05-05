# Sample project with `isolatedDeclarations` config

Follow the below steps to fix isolated declarations type errors using [ts-fix](https://github.com/microsoft/ts-fix):

1. Clone the repo
2. Install dependencies using `npm install`
3. Clone [ts-fix](https://github.com/microsoft/ts-fix/pull/30) somewhere else
4. Build, and link the ts-fix via `npm run build && npm link`
5. Install the linked ts-fix in this repo via `npm link ts-fix` in this project working directory
6. Run `npm run ts-fix` to see the errors get fixed automatically
