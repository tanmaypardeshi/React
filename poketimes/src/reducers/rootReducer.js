const initState = {
    posts: [
        {id:'1', title: 'Takimata et erat invidunt est eirmod nonumy ipsum amet, sed et duo eirmod ipsum elitr, lorem sed takimata nonumy et.'},
        {id:'2', title: 'Takimata et erat invidunt est eirmod nonumy ipsum amet, sed et duo eirmod ipsum elitr, lorem sed takimata nonumy et.'},
        {id:'3', title: 'Takimata et erat invidunt est eirmod nonumy ipsum amet, sed et duo eirmod ipsum elitr, lorem sed takimata nonumy et.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter((post) => {
            return action.id !== post.id;
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;