using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;


namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public CategoryController(
            ICategoryRepository categoryRepository,
            IUserProfileRepository userProfileRepository)
        {
            _categoryRepository = categoryRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var currentUserProfile = GetCurrentUserProfile();
            //if (currentUserProfile.UserType.Name != "Admin")
            //{
            //    return Unauthorized();
            //}
            return Ok(_categoryRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var category = _categoryRepository.GetCategoryById(id);
            //if (category != null)
            //{
            //    NotFound();
            //}
            return Ok(category);
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            var currentUserProfile = GetCurrentUserProfile();
            //if (currentUserProfile.UserType.Name != "Admin")
            //{
<<<<<<< Updated upstream
              //  return Unauthorized();
=======
            //    return Unauthorized();
>>>>>>> Stashed changes
            //}
            _categoryRepository.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.Id }, category);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

        // https://localhost:5001/api/category/id
        [HttpPut("{id}")]
        public IActionResult Put(int id, Category category)
        {
            //if (id != category.Id)
            //{
            //    return BadRequest();
            //}

            _categoryRepository.UpdateCategory(category);
            return NoContent();

        }

        // https://localhost:5001/api/category/id
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _categoryRepository.DeleteCategory(id);
             return NoContent();
      
        }
    }
}