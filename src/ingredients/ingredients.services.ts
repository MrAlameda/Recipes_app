import { Request,Response } from "express"
const ingredientControllers = require("./ingredients.controller");

export const getAll = (req:Request, res:Response) => {
  ingredientControllers
    .getAllIngredients()
    .then((data:any) => {
      res.status(200).json(data);
    })
    .catch((err:Error) => {
      res.status(400).json({ message: err.message });
    });
};

export const getById = (req:Request, res:Response) => {
  const id = req.params.ingredient_id;
  ingredientControllers.getIngredientsById(id)
    .then((data:any) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID", id });
      }
    })
    .catch((err:Error) => {
      res.status(400).json({ message: err.message });
    });
};

export const created = (req:Request, res:Response) => {
  const data = req.body;

  if (data.name && data.typeId) {
    ingredientControllers.createIngredients(data)
      .then((data:any) => {
        res.status(201).json(data);
      })
      .catch((err:Error) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        name: "string",
        typeId: "number",
        urlImg: "string",
      },
    });
  }
};

export const patched = (req:Request, res:Response) => {
  const data = req.body;
  const id = req.params.ingredient_id;
  ingredientControllers.updateIngredient(id, data)
    .then((data:any) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `Ingredient with ID: ${id} edited succesfully` });
      } else {
        res.status(404).json({ message: "Invalid ID", id });
      }
    })
    .catch((err:Error) => {
      res.status(400).json({ message: err.message });
    });
};

export const deleted = (req:Request, res:Response) => {
  const id = req.params.ingredient_id;

  ingredientControllers.deleteIngredient(id)
    .then((data:any) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID", id });
      }
    })
    .catch((err:Error) => {
      res.status(400).json({ message: err.message });
    });
};

export const postIngredientToUser = (req:any, res:Response) => {
  const userId = req.user.id;
  const data = req.body;
  const ingredientId = req.params.ingredient_id;

  if (data.amount) {
    ingredientControllers.addIngredientToUser(data,userId,ingredientId)
        .then((data:any) => {
            res.status(201).json(data)
        })
        .catch((err:Error) => {
            res.status(400).json({message: err.message})
        })
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        amount: "string",
      },
    });
  }
};
