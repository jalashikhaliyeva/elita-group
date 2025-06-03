import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface BreadcrumbProps {
  title?: string; // Optional title for the current page
  parentTitle?: string; // Optional parent title (for cases where you want to customize)
}

function Breadcrumb({ title, parentTitle }: BreadcrumbProps) {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment !== '');

  // Mapping of path segments to display names
  const pathDisplayNames: Record<string, string> = {
    'dizayn': 'Dizayn',
    'hamam': 'Hamam Aksesuarları',
    'brendler': 'Brendlər',
    // Add more mappings as needed
  };

  // Generate breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => {
    // Build the path up to the current segment
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const isLast = index === pathSegments.length - 1;

    // For the last segment, use the title prop if available
    if (isLast && title) {
      return {
        displayName: title,
        path,
        isLast: true
      };
    }

    // Use custom display name if available, otherwise use the segment
    const displayName = pathDisplayNames[segment] || segment;

    return {
      displayName,
      path,
      isLast
    };
  });

  // Special case for home page or when no segments exist
  if (breadcrumbItems.length === 0) {
    return null;
  }

  // Special handling for parent title override
  if (parentTitle && breadcrumbItems.length > 1) {
    breadcrumbItems[breadcrumbItems.length - 2].displayName = parentTitle;
  }

  return (
    <div className="flex items-center gap-2 py-4 flex-wrap">
      <Link 
        href="/" 
        className="font-manrope text-base font-normal leading-6 text-textBase hover:text-amber-700 transition-colors"
      >
        Ana səhifə
      </Link>
      <ChevronIcon />
      
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.isLast ? (
            <span className="font-manrope text-base font-normal leading-6 text-amber-700">
              {item.displayName}
            </span>
          ) : (
            <>
              <Link 
                href={item.path} 
                className="font-manrope text-base font-normal leading-6 text-textBase hover:text-amber-700 transition-colors"
              >
                {item.displayName}
              </Link>
              <ChevronIcon />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const ChevronIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="#18181B"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default Breadcrumb;