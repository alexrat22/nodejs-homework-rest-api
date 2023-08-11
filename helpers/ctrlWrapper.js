const ctrlWrapper = (getAll) => {
  const wrapper = async (req, res, next) => {
    try {
      await getAll(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return wrapper;
};
module.exports = ctrlWrapper;
