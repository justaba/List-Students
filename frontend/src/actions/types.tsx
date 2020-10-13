export interface IADDSTUDENT {
    name: string,
    date: string,
    estimate: string
}

export interface IADDREQUEST {
    type: string,
    payload: IADDSTUDENT
}

export interface IUPDATESTUDENT {
    _id: string,
    name: string,
    date: string,
    estimate: string
}