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
              //  return Unauthorized();
            //}
            return Ok(_categoryRepository.GetAll());
        }

        [HttpPost]
        public IActionResult Post(Category category)
        {
            var currentUserProfile = GetCurrentUserProfile();
            //if (currentUserProfile.UserType.Name != "Admin")
            //{
              //  return Unauthorized();
            //}
            _categoryRepository.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.Id }, category);
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
