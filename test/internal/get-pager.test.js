/* eslint-env mocha */
import { expect } from 'chai';
import _ from 'lodash';
import getPager from '../../src/internal/get-pager';

const range = _.range(1, 51);
const largeRange = _.range(1, 351);
const list = _.map(range, number => ({ id: number, name: `Item ${number}` }));
const largeList = _.map(largeRange, number => ({ id: number, name: `Item ${number}` }));

describe('getPager', () => {
  it('should return pager', () => {
    const pager = getPager(list);

    expect(pager).to.have.all.keys(
      'totalItems',
      'currentPage',
      'pageSize',
      'totalPages',
      'startPage',
      'endPage',
      'startIndex',
      'endIndex',
      'pages'
    );
  });

  it('should return the correct amount of items', () => {
    const pager = getPager(list);

    expect(pager.totalItems).to.equal(list.length);
  });

  it('should use a default currentPage of 1', () => {
    const pager = getPager(list);

    expect(pager.currentPage).to.equal(1);
  });

  it('should use a default pageSize of 10', () => {
    const pager = getPager(list);

    expect(pager.pageSize).to.equal(10);
  });

  it('should return the amount of pages', () => {
    const pager = getPager(list);

    expect(pager.totalPages).to.equal(Math.ceil(list.length / pager.pageSize));
  });

  it('should return the start page', () => {
    const pager = getPager(list);

    expect(pager.startPage).to.equal(1);
  });

  it('should return the end page', () => {
    const pager = getPager(list);

    expect(pager.endPage).to.equal(5);
  });

  it('should return the page indexes', () => {
    const pager = getPager(list, 2);

    expect(pager.startIndex).to.equal(10);
    expect(pager.endIndex).to.equal(19);
  });

  it('should return the available pages', () => {
    const pager = getPager(list);

    expect(pager.pages).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should return endPage:10 if (totalPages > 10 && currentPage <=6)', () => {
    const pager = getPager(largeList);

    expect(pager.endPage).to.equal(10);
  });

  it('should change endPage if currentPage > 6', () => {
    const pager = getPager(largeList, 7);

    expect(pager.endPage).to.equal(11);
  });

  it('should change startPage if currentPage > 6', () => {
    const pager = getPager(largeList, 7);

    expect(pager.startPage).to.equal(2);
  });

  it('should end at the end of the list', () => {
    const pager = getPager(largeList, 31);

    expect(pager.startPage).to.equal(Math.ceil(largeList.length / pager.pageSize) - 9);
    expect(pager.endPage).to.equal(Math.ceil(largeList.length / pager.pageSize));
  });
});
