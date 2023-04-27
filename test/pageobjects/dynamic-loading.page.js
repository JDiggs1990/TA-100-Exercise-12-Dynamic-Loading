import Page from './page.js';

        /**
         * sub page containing specific selectors and methods for a specific page
        */

        // Your class goes here. (but see below)
        //class DynamicLoading1 extends Page {
        

            /**
             * Your selectors (a type of element) go here
             * xpaths:
             *      link to example 1   //*[@id="content"]/div/a[1]
             *      link to example 2   //*[@id="content"]/div/a[2]
             *      example 1 start button //*[@id="start"]/button
             *      example 2 start button //*[@id="start"]/button    same xpath
             * ids:
             *      id in example 1 for start button
             * 
             * elements:
             *      example 2 start button <button>Start</button>
             * 
             * open console in inspect,  $('selector') to check selector
             * 
             * 
             * use $$ to grab multiple elements? [0] and [1] ?
             * 
             * 
            */
        

            //*[@id="content"]/div/a[1]    //Example 1 xpath link



            //*[@id="start"]/button     //xpath for example 1 start button


            /**
             * a method to encapsule automation code to interact with the page
            * e.g. to login using username and password
            */

            /**
             * overwrite specific options to adapt it to page object
            */


        class DynamicLoading1 extends Page {    
            open() {
                return super.open('dynamic_loading/1');       //opens https://the-internet.herokuapp.com/dynamic_loading/1
                    }
                }

            

               
        class DynamicLoading2 extends Page {
            open() {
                return super.open('dynamic_loading/2');       //opens https://the-internet.herokuapp.com/dynamic_loading/2
                    }
              }





        export default new DynamicLoading1();        //exports class
        //export default new DynamicLoading2();        //exports class     can't have more than one export module