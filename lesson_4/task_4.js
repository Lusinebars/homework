function translateDayToArmenian(dayInEnglish) {
    switch (dayInEnglish.toLowerCase()) {
        case 'monday':
            return 'Երկուշաբթի';
        case 'tuesday':
            return 'Երեքշաբթի';
        case 'wednesday':
            return 'Չորեքշաբթի';
        case 'thursday':
            return 'Հինգշաբթի';
        case 'friday':
            return 'Ուրբաթ';
        case 'saturday':
            return 'Շաբաթ';
        case 'sunday':
            return 'Կիրակի';
        default:
            return 'Invalid day! Please enter a valid day of the week.';
    }
}

