import { useState } from "react";

interface DateRangeProps {
    startDate: string;
    endDate?: string;
    showDuration: boolean;
}

const DateRange: React.FC<DateRangeProps> = ({
    startDate,
    endDate,
    showDuration = false,
}) => {
    const [error, setError] = useState<string | null>(null);

    const validateDate = (date: string): boolean => {
        const monthYearRegex = /^(0[1-9]|1[0-2])\/\d{4}$/; // Regex to match MM/YYYY format
        const yearRegex = /^\d{4}$/; // Regex to match YYYY format
        return monthYearRegex.test(date) || yearRegex.test(date);
    };

    const formatDate = (date: string): string => {
        if (date.includes("/")) {
            const [month, year] = date.split("/");
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            return `${monthNames[parseInt(month) - 1]} ${year}`;
        } else {
            return date;
        }
    };

    const parseDate = (date: string): Date => {
        if (date.includes("/")) {
            const [month, year] = date.split("/");
            return new Date(parseInt(year), parseInt(month) - 1);
        } else {
            return new Date(parseInt(date), 0);
        }
    };

    const compareDates = (start: string, end: string): boolean => {
        const startDate = parseDate(start);
        const endDate = parseDate(end);
        return startDate <= endDate;
    };

    const calculateDuration = (start: Date, end: Date): string => {
        // Add one month to the end date
        end.setMonth(end.getMonth() + 1);

        const totalMonths =
            (end.getFullYear() - start.getFullYear()) * 12 +
            (end.getMonth() - start.getMonth());
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        let duration = "";
        if (years > 0) {
            return `${years} year${years > 1 ? "s" : ""} ${months} month${
                months > 1 ? "s" : ""
            }`;
        } else if (months > 0) {
            return `${months} month${months > 1 ? "s" : ""}`;
        }

        return duration.trim();
    };

    if (!validateDate(startDate)) {
        return <>Error: Invalid start date format</>;
    }

    if (endDate && !validateDate(endDate)) {
        return <>Error: Invalid end date format</>;
    }

    const startDateObj = parseDate(startDate);
    const endDateObj = endDate ? parseDate(endDate) : new Date();

    if (endDate && !compareDates(startDate, endDate)) {
        return <>Error: Start date is larger than end date</>;
    }

    const startFormatted = formatDate(startDate);
    const endFormatted = endDate ? formatDate(endDate) : "Present";
    const duration = calculateDuration(startDateObj, endDateObj);

    return (
        <>
            {startFormatted} to {endFormatted} {showDuration && `(${duration})`}
        </>
    );
};

export default DateRange;
