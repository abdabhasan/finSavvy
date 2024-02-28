using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class CreateCommentDto
    {
        [Required]
        [MinLength(3, ErrorMessage = "Title must be 3 characters at least")]
        [MaxLength(220, ErrorMessage = "Title must be 220 characters at most")]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        [MinLength(3, ErrorMessage = "Content must be 3 characters at least")]
        [MaxLength(320, ErrorMessage = "Content must be 220 characters at most")]
        public string Content { get; set; } = string.Empty;

    }
}