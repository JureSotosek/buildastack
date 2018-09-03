const notEmpty = x => x.length !== 0;

export const yarnAddCommand = packages => {
  const dependencies = packages.filter(pkg => !pkg.dev);
  const devDependencies = packages.filter(pkg => pkg.dev);

  const dependenciesString = dependencies.reduce(
    (command, pkg) => command + ' ' + pkg.name,
    'yarn add'
  );
  const devDependenciesString = devDependencies.reduce(
    (command, pkg) => command + ' ' + pkg.name,
    'yarn add --dev'
  );

  if (notEmpty(dependencies) && notEmpty(devDependencies)) {
    return dependenciesString + ' & ' + devDependenciesString;
  } else if (notEmpty(dependencies)) {
    return dependenciesString;
  } else if (notEmpty(devDependencies)) {
    return devDependenciesString;
  } else {
    return '';
  }
};

export const npmInstallCommand = packages => {
  const dependencies = packages.filter(pkg => !pkg.dev);
  const devDependencies = packages.filter(pkg => pkg.dev);

  const dependenciesString = dependencies.reduce(
    (command, pkg) => command + ' ' + pkg.name,
    'npm install --save'
  );
  const devDependenciesString = devDependencies.reduce(
    (command, pkg) => command + ' ' + pkg.name,
    'npm install --save-dev'
  );

  if (notEmpty(dependencies) && notEmpty(devDependencies)) {
    return dependenciesString + ' & ' + devDependenciesString;
  } else if (notEmpty(dependencies)) {
    return dependenciesString;
  } else if (notEmpty(devDependencies)) {
    return devDependenciesString;
  } else {
    return '';
  }
};

export const formatPackages = packages => {
  return packages.map(pkg => ({
    name: pkg.name,
    version: pkg.version,
    dev: pkg.dev
  }));
};

export const isErrorForbidden = error =>
  error && error.graphQLErrors.some(({ code }) => code === 'FORBIDDEN');
