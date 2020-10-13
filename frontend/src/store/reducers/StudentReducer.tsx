import { Reducer } from 'redux';

interface IListStudents {
    _id: string,
    name: string,
    data: string,
    estimate: string

}

interface IStudentState {
    list: IListStudents[],
}

interface IAction {
    type: string,
    payload: IListStudents,
}

const initialState: IStudentState = {
    list: [],
}

export default function studentReducer (state = initialState, action: IAction) {

    switch(action.type) {
        case 'GET_STUDENTS':
            return {
                list: action.payload
            }
            break;
        case 'ADD_STUDENT':
            return {
                list: [...state.list, action.payload]
            }
            break;
        case 'DELETE_STUDENT':
            return {
                list: state.list.filter(item => item._id !== action.payload._id)
            }
            break;
        case 'UPDATE_STUDENT':
            return {
                list: state.list.map(item => item._id !== action.payload._id ? item : action.payload)
            }
            break;
        default: 
            return state;
    }
}