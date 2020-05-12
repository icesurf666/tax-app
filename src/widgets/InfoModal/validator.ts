export const validate = (values: IInfo) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Обязательное поле';
  }
  if (!values.dateOfStart) {
    errors.dateOfStart = 'Обязательное поле';
  }
  if (!values.numberBuild) {
    errors.numberBuild = 'Обязательное поле';
  }
  if (!values.regionId) {
    errors.regionId = 'Обязательное поле';
  }
  if (!values.cityId) {
    errors.cityId = 'Обязательное поле';
  }
  if (!values.areaId) {
    errors.areaId = 'Обязательное поле';
  }
  if (!values.typeOfAddresId) {
    errors.typeOfAddresId = 'Обязательное поле';
  }
  if (!values.streetId) {
    errors.streetId = 'Обязательное поле';
  }
  if (!values.zip) {
    errors.zip = 'Обязательное поле';
  }
  return errors;
};