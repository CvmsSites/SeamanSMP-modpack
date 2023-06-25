onEvent('recipes', event => {
    event.shaped('vs_clockwork:chocolate_frosting_bucket', [
      ' A ',
      'SDS',
      ' A '
    ], {
      S: 'minecraft:cocoa_beans',
      A: 'minecraft:gunpowder',
      D: 'vs_clockwork:vanilla_frosting_bucket',
    })
  })