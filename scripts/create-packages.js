const fse = require("fs-extra");
const path = require("path");

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "./build");

async function createPackages() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, "./package.json"),
    "utf8"
  );
  const {
    nyc,
    scripts,
    devDependencies,
    workspaces,
    ...packageDataOther
  } = JSON.parse(packageData);
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: "./index.js",
    typings: "./index.d.ts"
  };
  const targetPath = path.resolve(buildPath, "./package.json");

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    "utf8"
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

createPackages();
