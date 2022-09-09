import { Request, Response } from "express";
import { Inject } from "typescript-ioc";
import { ProgramsUseCase } from "../application/programs-use-case";

export class ProgramsEndpoint {
    @Inject
    private programsUseCase!: ProgramsUseCase;

    public async findAll(request: Request, response: Response) {
        response.status(200).json();
    }

    public async findOne(request: Request, response: Response) {

    }

    public async create(request: Request, response: Response) {

    }

    public async update(request: Request, response: Response) {

    }

    public async delete(request: Request, response: Response) {

    }
}