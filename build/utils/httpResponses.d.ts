import { ServiceResponse } from "../@types/ServiceResponse";
declare const httpStatus: {
    [key: string]: {
        statusCode: number;
        message: string;
    };
};
declare let httpResponses: {
    [key: string]: ({ message, data, success, error, errMessage, fix, newAccessToken }: {
        message?: string | undefined;
        data?: any | undefined;
        success?: boolean | undefined;
        error?: string | null | undefined;
        errMessage?: any | undefined;
        fix?: string | undefined;
        newAccessToken?: string | undefined;
    }) => ServiceResponse;
};
export { httpResponses, httpStatus };
