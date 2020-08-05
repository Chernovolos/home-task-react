import { v4 as uuid4 } from "uuid";

export const newElementFromData = (data) => {
    return {
        id: uuid4(),
        ...data,
    }
};

export const addNewElement = (data, goods) => {
    return [...goods, newElementFromData(data)];
};

export const deleteElementById = (id, goods) => {
    return goods.filter((e) => e.id !== id);
};

export const getTotal = (goods) => {
    return goods.reduce((acc, item) => {
        return acc + parseFloat(item.weight);
    }, 0)
};