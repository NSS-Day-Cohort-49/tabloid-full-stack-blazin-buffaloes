﻿using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        //void Add(Post post);
        List<Post> GetAll();
        public Post GetById(int id);
    }
}