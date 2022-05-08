import ts1 from './sample1/sample1';
import ts2 from './sample2/sample2';

if (location.href.includes('sample1')) {
  ts1();
} else if (location.href.includes('sample2')) {
  ts2();
}
