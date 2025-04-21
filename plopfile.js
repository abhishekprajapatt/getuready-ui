module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'Create a new component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Enter component name (e.g. Button)',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'packages/react/src/components/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/component.hbs',
        },
      ],
    });
  };
  