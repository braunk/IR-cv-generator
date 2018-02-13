#include <iostream>
#include <fstream>
#include <string>
#include <map>

// Stuff for AJAX
#include "cgicc/Cgicc.h"
#include "cgicc/HTTPHTMLHeader.h"
#include "cgicc/HTMLClasses.h"
#define XML_USE_STL

using namespace std;
using namespace cgicc; // Needed for AJAX functions.

ofstream log;

int main() {
  Cgicc cgi;    // Ajax object
  char *cstr;

  PhoneBook pb; // Phone Book SQL Interface Object
  vector<PhoneEntry> pbResults;

  // Create AJAX objects to recieve information from web page.
  form_iterator op = cgi.getElement("operation");
  string operation = **op;
  log.open("karaphone.log",ios::out | ios::app);
  log << "Op:" << operation << endl;
  log.close();
  
  //Use this for mapping the info into the database!!!
   if(operation=="Add Entry"){
    form_iterator afnameString = cgi.getElement("afname");
    form_iterator alnameString = cgi.getElement("alname");
    form_iterator addphoneString = cgi.getElement("aphone");
    form_iterator addtypeString = cgi.getElement("atype");

    string addfname=**afnameString;
    string addlname=**alnameString;
    string addphone=**addphoneString;
    string addtype=**addtypeString;

    pb.addEntry(addfname,addlname,addphone,addtype);
    output="success";
  }

 /* send back the results */
  cout << "Content-Type: text/plain\n\n";
  cout << output << endl;
  return 0;
}
