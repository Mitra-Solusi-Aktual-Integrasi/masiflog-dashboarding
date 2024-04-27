import express, {Request, Response} from 'express';

export const authRoutes = express.Router();

authRoutes.post('/auth/login/:app_id', (req: Request, res: Response): void => {
    /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/loginInputSchema"
                    }  
                }
            }
        } 
    */
    const { username, password } = req.body;
    const { app_id } = req.query;

    console.log(`User ${username} with Password ${password} and app_id ${app_id}, trying to login`);

    res.status(200).json({
        success: true,
        token: 'sometoken',
        refresh: 'sometoken'
    });
    /* #swagger.responses[200] = {
            description: "",
            content: {
                "application/json": {
                    schema:{
                        $ref: "#/components/schemas/loginOutputSchema"
                    }
                }           
            }
        }   
    */
});