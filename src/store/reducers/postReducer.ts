import PostType from "../../types/Post";

const defaultState: PostType[] = [];

const postReducer = (state = defaultState, action: any) => {
    if (action.type === 'setPosts') {
        return action.payload;
    }
    return state;
}

export default postReducer;