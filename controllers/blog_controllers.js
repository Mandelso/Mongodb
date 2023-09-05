const blogModel = require ('../schemas/blog_schema');

//post request
//create a new blog
const createBlog = async (req, res) => {
  const {title, description, content} = req.body;
  try {
    //creating a new document (a new blog post)
    const newBlog = new blogModel ({title, description, content});
    await newBlog.save ();
    res.send ({message: 'Successfull', data: newBlog});
  } catch (error) {
    console.log (error);
    res.send ({message: 'Unsuccessfull'});
  }
};

//get request
//get all blogs created
const getAllBlogs = async (req, res) => {
  try {
    const allPosts = await blogModel.find ();
    await allPosts;
    res.json ({message: 'Successfull', data: allPosts});
  } catch (error) {
    console.log (error);
    res.send ({message: 'Unsuccessfull'});
  }
};

//put request
//get blog by id and updates it
const updatedBlog = async (req, res) => {
  const {id} = req.params;
  try {
    const updatedBlog = await blogModel.findByIdAndUpdate (id, req.body);
    res.json ({message: 'Successfull', data: updatedBlog});
  } catch (error) {
    console.log (error);
    res.send ({message: 'Unsuccessfull'});
  }
};

//delete request
//delete blog by id
const deleteBlog = async (req, res) => {
  const {id} = req.params;
  try {
    const deletePost = await blogModel.findByIdAndDelete (id);
    res.json ({message: 'Successfull', data: deletePost});
  } catch (error) {
    console.log (error);
    res.send ({message: 'Unsuccessfull'});
  }
};

module.exports = {createBlog, getAllBlogs, updatedBlog, deleteBlog};
