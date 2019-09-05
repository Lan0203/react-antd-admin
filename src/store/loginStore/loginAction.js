export const GO_LOGIN="GO_LOGIN";
export const OUT_LOGIN="OUT_LOGIN";

export const goLoginAction =(username) =>({
    type:GO_LOGIN,
    username
})

export const outLoginAction =(username) =>({
    type:OUT_LOGIN,
    username
})