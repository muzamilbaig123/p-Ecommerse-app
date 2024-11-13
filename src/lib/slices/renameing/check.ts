import { createSlice } from "@reduxjs/toolkit";



const globalData = createSlice({
    name: "Student Details",
    initialState: 393248,
    reducers: {
        student: () => {
            const firstStu = {
                name: "Muzamil Baig",
                rollNumber: 129823,
                country: "Pakistan"
            }
        }
    } 
})

export const { student } = globalData.actions

export default globalData.reducer;
