import Link from "next/link"
import { FiChevronRight } from "react-icons/fi";
import { GoHome } from "react-icons/go";

interface IndicatorItem {
    label: string;
    href?: string;
    isActive?: boolean;
  }

interface PathIndicatorProps {
    path?: string;
    items?: IndicatorItem[];
    separator?: "arrow" | "slash" | "dot";
    showHome?: boolean;
    homeIcon?: boolean;
    className?: string;
  }

const PathIndicator = ({
    path,
    items,
    separator = "arrow",
    showHome = true,
    homeIcon = true,
    className = ""
  }:PathIndicatorProps) => {


     // Parse path string into breadcrumb items
  const parseBreadcrumbs = (): IndicatorItem[] => {
    if (items) return items;
    
    if (!path) return [];
    
    const pathSegments = path.split('>').map(segment => segment.trim());
    
    return pathSegments.map((segment, index) => ({
      label: segment,
      href: index === pathSegments?.length - 1 ? undefined : `/${segment.toLowerCase().replace(/\s+/g, '-')}`,
      isActive: index === pathSegments?.length - 1
    }));
  };

  const breadcrumbItems = parseBreadcrumbs();

  const getSeparatorIcon = () => {
    switch (separator) {
      case "slash":
        return <span className="text-gray-400 mx-2">/</span>;
      case "dot":
        return <span className="text-gray-400 mx-2">•</span>;
      default:
        return <FiChevronRight  size={16} className="text-gray-400 mx-2" />;
    }
  };

  if (breadcrumbItems?.length === 0) return null;


  return (
    <nav 
      className={`flex items-center space-x-1 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {showHome && (
          <li className="flex items-center">
            <Link 
              href="/" 
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center"
            >
              {homeIcon ? (
                <GoHome  size={16} className="mr-1" />
              ) : (
                "Home"
              )}
            </Link>
            {breadcrumbItems?.length > 0 && getSeparatorIcon()}
          </li>
        )}
        
        {breadcrumbItems?.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href && !item.isActive ? (
              <Link 
                href={item.href}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span 
                className={`${item.isActive 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-500'
                }`}
                aria-current={item.isActive ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            
            {index < breadcrumbItems?.length - 1 && getSeparatorIcon()}
          </li>
        ))}
      </ol>
    </nav>
  )
}
export default PathIndicator