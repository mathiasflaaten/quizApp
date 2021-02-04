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
                new QuizItem() { Id = 1, Question = "Hvor høy er Mount Everest (moh)?", Choices = new string[] {"6397", "9234" ,"8849", "7754" }, Answer = 2 },
                new QuizItem() { Id = 2, Question = "Hva heter Hovedstaden i Norge?", Choices = new string[] {"Stockholm", "København", "Oslo", "Helsinki" }, Answer = 2 },
                new QuizItem() { Id = 3, Question = "Hvem var president i USA fra 1961 - 1963?", Choices = new string[] {"Truman", "Kennedy", "Nixon", "Johnson" }, Answer = 1 },
                new QuizItem() { Id = 4, Question = "Hvor fort kan en isbjørn løpe (km/t)?", Choices = new string[] { "20" ,"60", "40", "80" }, Answer = 2 },
                new QuizItem() { Id = 5, Question = "Hvor finner man snøleoparden?", Choices = new string[] { "Sentrale-asia", "Afrika", "Europa", "Nord-amerika" }, Answer = 0 }
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
