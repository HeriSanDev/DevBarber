export const initialState ={
    avatar: '',
    name: '',
    email: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar};
        break;
        case 'setName':
            return {...state, name: action.payload.name};
        break;
        case 'setEmail':
            return {...state, email: action.payload.email};
        break;

        default:
        return state;

    }
}