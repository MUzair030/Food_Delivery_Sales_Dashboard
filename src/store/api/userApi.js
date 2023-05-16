import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_URL + "/general"}),
    endpoints: (builder) => ({

        getUsers: builder.query({
            query: ()=> "/users"
        }),

        getUserById: builder.query({
            query: userId => `/user/${userId}`
        }),

        addNewUser: builder.mutation({
            query: data => ({
                url: "/users",
                method: "POST",
                body: data
            })
        }),

        patchUser: builder.mutation({
            query: data => ({
                url: `/user/${data.userId}`,
                method: "PATCH",
                body: data
            })
        })
    })

});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useAddNewUserQuery,
    usePatchUserQuery
} = userApi;