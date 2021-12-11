const data = {
    gold: [],
    premium: [],
    vehicles: [],
    all: [],
    collect: () => {
        data.all = [...data.vehicles, ...data.gold, ...data.premium];
    },
};

export default data;
