import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAI } from 'openai';


dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.
})