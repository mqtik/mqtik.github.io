
array: Collections.sort(temp, new Comparator<XYZBean>() 
{
     @Override
     public int compare(XYZBean lhs, XYZBean rhs) {

       return Integer.valueOf(lhs.getDistance()).compareTo(rhs.getDistance());
      }
 });
  
Collections.sort(temp, new Comparator<XYZBean>() 
{
     @Override
     public int compare(XYZBean lhs, XYZBean rhs) {

       return Integer.valueOf(rhs.getDistance()).compareTo(lhs.getDistance());
      }
 });

 ArrayList<Student> allStudents = new ArrayList();
        allStudents.add(new Student(2));
        allStudents.add(new Student(4));
        allStudents.add(new Student(1));
        allStudents.add(new Student(9));
        allStudents.add(new Student(8));
        allStude

        Collections.sort(allStudents, new Comparator<Student>() {

            public int compare(Student s, Student s2) {
                return s.getMark() - s2.getMark();
            }
        });
 [2, 4, 1, 9, 8, 5, 9, 6, 3]