﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Post
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        public string ImageLocation { get; set; }

        public DateTime CreateDateTime { get; set; }

        public DateTime PublishDateTime { get; set; }

        public bool IsApproved { get; set; }

        public int CategoryId { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile User { get; set; }

    }
}
