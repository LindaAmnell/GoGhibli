import { Movie } from "../models/movies";
import Joi from "joi";

type ValidationResult = ValidationSuccess | ValidationFailure;
interface ValidationSuccess {
  success: true;
  value: Movie[];
}
interface ValidationFailure {
  success: false;
  error: string;
}

const schema = Joi.array<Movie>().items(
  Joi.object<Movie>({
    // films: Joi.array().items(Joi.string()).required(),
    image: Joi.string().uri(), // man kan dela upp på flera rader
    title: Joi.string().required(),
    id: Joi.string().required(),
    description: Joi.string().required(),
    director: Joi.string().required(),
    release_date: Joi.string().required(),
  })
);

export function validateMovies(movie: Movie[]): ValidationResult {
  // console.log('Test 1', schema.validate( 5 ))
  // console.log('Test 2', schema.validate( [] ))
  // console.log('Test 3', schema.validate( [
  // 	{
  // 		films: ['titel'],
  // 		imageUrl: 'https://image.com/image.example.png',
  // 		name: 'name',
  // 		_id: 123}
  // ] ))
  // Förväntat testresultat: 1==fail, 2==okej, 3==okej

  const result = schema.validate(
    movie.map((m) => ({
      title: m.title,
      image: m.image,
      description: m.description,
      id: m.id,
      director: m.director,
      release_date: m.release_date,
    }))
  );
  if (result.error) {
    return { success: false, error: result.error.message };
  } else {
    return { success: true, value: movie };
  }
}
