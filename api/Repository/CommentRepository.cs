using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDBContext _context;
        public CommentRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Comment> CreateAsync(Comment commentModel)
        {
            if (commentModel.CreatedOn.Kind == DateTimeKind.Local)
            {
                commentModel.CreatedOn = commentModel.CreatedOn.ToUniversalTime();
            }
            await _context.Comments.AddAsync(commentModel);
            await _context.SaveChangesAsync();
            return commentModel;
        }

        public async Task<Comment?> DeleteAsync(int id)
        {
            var commentModel = await _context.Comments.FirstOrDefaultAsync(e => e.Id == id);

            if(commentModel == null)
            {
                return null;
            }

            _context.Comments.Remove(commentModel); 
            await _context.SaveChangesAsync();

            return commentModel;
        }

        public async Task<List<Comment>> GetAllAsync(CommentQueryObject queryObject)
        {
            var comments = _context.Comments.Include(e => e.AppUser).AsQueryable();

            if(!string.IsNullOrWhiteSpace(queryObject.Symbol))
            {
                comments = comments.Where(e => e.Stock.Symbol == queryObject.Symbol);
            };

            if(queryObject.IsDecending == true)
            {
                comments = comments.OrderByDescending(e => e.CreatedOn);
            }

            return await comments.ToListAsync(); 
        }

        public async Task<Comment?> GetByIdAsync(int id)
        {
            return await _context.Comments.Include(e => e.AppUser).FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<Comment?> UpdateAsync(int id, Comment commentModel)
        {
            var existingComment = await _context.Comments.FindAsync(id);

            if (existingComment == null)
            {
                return null;
            }

            existingComment.Title = commentModel.Title;
            existingComment.Content = commentModel.Content;

            await _context.SaveChangesAsync();

            return existingComment;
        }
    }
}