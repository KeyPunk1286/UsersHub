declare module 'axios' {
    interface InternalAxiosRequestConfig {
       _retry?: boolean
    }
}
export {}