import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { IADDSTUDENT, IADDREQUEST, IUPDATESTUDENT } from './types';

const url = 'http://localhost:4000/api';

export const getStudents =  () => (dispatch: Dispatch) => {
    
    axios.get(`${url}/students`).then((res) => {
        dispatch({
            type: "GET_STUDENTS",
            payload: res.data.data
        });
        
    }).catch((e) => {
        dispatch({
            type: "ERROR_GET_STUDENTS"
        });
    });
}

export const addStudent = ({name, date, estimate}: IADDSTUDENT)  => (dispatch: Dispatch) => {

    axios.post(`${url}/create`, {name, date, estimate}).then((res: any) => {
        dispatch({
            type: "ADD_STUDENT",
            payload: {id: res.data.id, name, date, estimate}
        });
        alert('Анкета студента добавлена');
    }).catch((e) => {
        dispatch({
            type: "ERROR_ADD_STUDENT"
        })
        alert('Произошла ошибка при добавлении студента');
    });
    
}

export const deleteStudent = (id: string) => (dispatch: Dispatch) => {
    
    axios.delete(`${url}/delete/${id}`).then((res) => {
        dispatch({
            type: "DELETE_STUDENT",
            payload: {
                _id: id
            }
        });
        alert('Анкета студента удалена');
    }).catch ((e) => {
        return {
            type: "ERROR_DELETE_STUDENT"
        }
    });
}

export const updateStudent = ({_id, name, date, estimate}: IUPDATESTUDENT) => (dispatch: Dispatch) => {

    axios.put(`${url}/update`, {_id, name, date, estimate}).then((res) => {
        dispatch({
            type: "UPDATE_STUDENT",
            payload: {_id, name, date, estimate}
        });
        alert('Анкета студента обновлена');
    }).catch ((e) => {
        dispatch({
            type: "ERROR_UPDATE_STUDENT"
        });
    });
}