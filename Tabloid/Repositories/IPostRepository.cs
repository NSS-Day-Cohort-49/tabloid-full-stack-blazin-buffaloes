using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        public int Add(Post post);
        List<Post> GetAll();
        public Post GetById(int id);
        public void Update(Post post);
        public void Delete(int id);

    }
}