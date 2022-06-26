const imageSources = {
    flowers: require('./flowers.jpg'),
    frenchie: require('./frenchie.jpg'),
    italy: require('./italy.jpg'),
    lewandowski: require('./lewandowski.jpg'),
    palms: require('./palms.jpg'),
    panda: require('./panda.jpg'),
    paris: require('./paris.jpg'),
    sheeps: require('./sheeps.jpg'),
    winter: require('./winter.jpg'),
    zendaya: require('./zendaya.jpg')
};

const imageNames = [
    'flowers',
    'frenchie',
    'italy',
    'lewandowski',
    'palms',
    'panda',
    'paris',
    'sheeps',
    'winter',
    'zendaya',
];

export const getSource = (id) => {
    const name = imageNames[id];
    return imageSources[name];
};