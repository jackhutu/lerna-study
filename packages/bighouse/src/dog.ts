interface DogParams {
  name: string;
}

export const Dog = (params: DogParams) => {
  return params.name + ': hutu';
};
