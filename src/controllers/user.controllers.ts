import { Request, response, Response } from "express";
import { pool } from "../database/database";

class UsersRouters {
  createUser = async (req: Request, res: Response) => {
    const { nome, email, idade } = req.query;
    const responseDb = await pool.query(
      "INSERT INTO tb_user (nome, email, idade) VALUES ($1, $2, $3)",
      [nome, email, idade]
    );

    res.status(200).json(responseDb.rows);
  };

  readUsers = async (req: Request, res: Response) => {
    const responseDB = await pool.query("SELECT * FROM tb_user");
    res.json(responseDB.rows);
  };

  updateUser = async (req: Request, res: Response) => {
    const { newValue, row, id } = req.query;
    const responseDB = await pool.query(
      `UPDATE tb_user SET ${row} = $1 WHERE id=$2`,
      [newValue, id]
    );

    res.status(200).json(responseDB.rows);
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const responseDB = await pool.query("DELETE FROM tb_user WHERE id=$1", [
      id,
    ]);

    res.status(200).json(responseDB.rows);
  };
}

const usersRouters = new UsersRouters();
export default usersRouters;
