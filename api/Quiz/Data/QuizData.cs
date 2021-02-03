using System;
using System.Collections.Generic;
using Quiz.Models; 
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Data
{
    public static class QuizData
    {

       private static List<QuizItem> Quizes = new List<QuizItem>()
            {
                new QuizItem() { Id = 1, Question = "Hva heter jeg?", Choices = new string[] {"Mathias", "Erik" ,"Mons", "Kasper" }, Answer = 0 },
                new QuizItem() { Id = 2, Question = "Hva heter Hovedstaden i Norge?", Choices = new string[] {"Stockholm", "København", "Oslo", "Helsinki" }, Answer = 2 },
                new QuizItem() { Id = 3, Question = "Hvem var president i USA fra 1961 - 1963?", Choices = new string[] {"Truman", "Kennedy", "Nixon", "Johnson" }, Answer = 1 },
                new QuizItem() { Id = 4, Question = "Hva heter jeg?", Choices = new string[] { "Mathias" ,"Erik", "Mons", "Kasper" }, Answer = 0 },
                new QuizItem() { Id = 5, Question = "Hva heter jeg?", Choices = new string[] { "Mathias", "Erik", "Mons", "Kasper" }, Answer = 0 }
    };
   
        public static List<QuizItem> _quizes 
        {
            get
            {
                return Quizes; 
            }
        } 

      

    }
}
